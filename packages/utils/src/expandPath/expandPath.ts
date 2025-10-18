export function expandPath(
  path: string,
  params?: Record<string, string | number | undefined>
) {
  // テンプレートに{}パラメータがあるかチェック
  const paramMatches = path.match(/\{([^}]+)\}/g);
  
  // パスにパラメータがない場合はそのまま返す
  if (!paramMatches) {
    return path;
  }
  
  // パラメータがある場合、paramsが提供されているかチェック
  if (!params) {
    const missingKeys = paramMatches.map(match => match.slice(1, -1)); // {key} -> key
    throw new Error(`Missing path param: ${missingKeys.join(', ')}`);
  }
  
  return path.replace(/\{([^}]+)\}/g, (_, key) => {
    const v = params[key];
    if (v === undefined || v === null) {
      throw new Error(`Missing path param: ${key}`);
    }
    return encodeURIComponent(String(v));
  });
}