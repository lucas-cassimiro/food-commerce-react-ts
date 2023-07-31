import * as S from "./styles";

import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
}

export function SnackTitle({ children }:TitleProps) {
    return (
        <S.Title>{children}</S.Title>
    )
}