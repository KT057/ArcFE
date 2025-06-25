const FILE_ID = "YUbTzje2jUbb0Yh5ycNx2P";
const API_TOKEN = "figd_UvF_8Of4D8abbWxuemEzffOj9UxwlXxD_3Dm-4Or";

type TextStyleInfo = {
  name: string;
  style_type: "TEXT";
  node_id: string;
};

type FigmaStyle = {
  fontSize: string;
  fontFamily: string;
  fontWeight: number;
  lineHeight: string;
};

type FigmaStyleMap = Record<string, FigmaStyle>;

const headers = {
  "X-Figma-Token": API_TOKEN
};

const fetchJSON = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

const extractTextStyles = async (): Promise<void> => {
  const stylesUrl = `https://api.figma.com/v1/files/${FILE_ID}/styles`;
  const stylesRes = await fetchJSON<{ meta: { styles: TextStyleInfo[] } }>(
    stylesUrl
  );

  const textStyles = stylesRes.meta.styles.filter(
    (s) => s.style_type === "TEXT"
  );

  const nodeIds = textStyles.map((s) => s.node_id).join(",");
  const nodesUrl = `https://api.figma.com/v1/files/${FILE_ID}/nodes?ids=${encodeURIComponent(nodeIds)}`;
  const nodesRes = await fetchJSON<{
    nodes: Record<string, { document: { style: any } }>;
  }>(nodesUrl);

  const styles: FigmaStyleMap = {};

  for (const { node_id, name } of textStyles) {
    const style = nodesRes.nodes[node_id]?.document?.style;
    if (!style) continue;

    const key = name.replace(/\s+/g, "-").toLowerCase();
    styles[key] = {
      fontSize: `${style.fontSize}px`,
      fontFamily: `"${style.fontFamily}"`,
      fontWeight: style.fontWeight,
      lineHeight: style.lineHeightPx ? `${style.lineHeightPx}px` : "normal"
    };
  }

  const scss = Object.entries(styles)
    .map(
      ([key, value]) =>
        `$font-${key.replace(/[()]/g, "").replace(/[/]/g, "_")}: (\n${Object.entries(
          value
        )
          .map(([k, v]) => `  ${k}: ${v},`)
          .join("\n")}\n);\n`
    )
    .join("\n");

  console.log(scss);
};

extractTextStyles().catch(console.error);
