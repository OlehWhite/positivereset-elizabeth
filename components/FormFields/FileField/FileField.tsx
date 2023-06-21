import React, { FC } from "react";
import { StyledFile } from "../styled";

const FileField: FC<any> = ({ register }: any) => {
  return <StyledFile type="file" name="File" register={register} />;
};

export default FileField;
