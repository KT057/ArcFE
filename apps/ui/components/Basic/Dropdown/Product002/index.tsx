import type { ComponentProps, ReactNode } from "react";
import { Balloon001 } from "../../Balloon";
import {
	StyledContents,
	StyledContentsWrapper,
	StyledDetail,
	StyledDetailInner,
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
	balloonProps?: ComponentProps<typeof Balloon001>;
}

export const Dropdown002 = ({
	style,
	detail,
	contents,
	nowrap,
	balloonProps,
}: DropdownMenuProps) => {
	return (
		<StyledWrapper>
			<StyledContentsWrapper>
				<StyledContents>{contents}</StyledContents>
				<StyledDetailWrapper>
					<StyledDetail nowrap={nowrap}>
						<Balloon001
							{...balloonProps}
							style={{
								...balloonProps?.style,
								backgroundColor: style?.backgroundColor,
							}}
							type="001"
							arrowPosition="top"
						>
							<StyledDetailInner>{detail}</StyledDetailInner>
						</Balloon001>
					</StyledDetail>
				</StyledDetailWrapper>
			</StyledContentsWrapper>
		</StyledWrapper>
	);
};
