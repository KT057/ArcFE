import type { ReactNode } from "react";
import {
	StyledContents,
	StyledContentsWrapper,
	StyledDetail,
	StyledDetailWrapper,
	StyledWrapper,
} from "./styles";

interface DropdownMenuProps {
	detail: ReactNode;
	contents: ReactNode;
	nowrap?: boolean;
	style?: {
		backgroundColor?: string;
		borderColor?: string;
		borderRadius?: number;
	};
}

export const Dropdown001 = ({
	style,
	detail,
	contents,
	nowrap,
}: DropdownMenuProps) => {
	return (
		<StyledWrapper>
			<StyledContentsWrapper>
				<StyledContents>{contents}</StyledContents>
				<StyledDetailWrapper>
					<StyledDetail
						nowrap={nowrap}
						borderColor={style?.borderColor}
						backgroundColor={style?.backgroundColor}
						borderRadius={style?.borderRadius}
					>
						{detail}
					</StyledDetail>
				</StyledDetailWrapper>
			</StyledContentsWrapper>
		</StyledWrapper>
	);
};
