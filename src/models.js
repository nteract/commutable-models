import * as Immutable from 'immutable';
import ImmutableModel from 'flow-immutable-models';

/*
Reducing complexity a bit here by removing the one recursive type.

export type ImmutableJSON = string | number | boolean | null | ImmutableJSONMap | ImmutableJSONList; // eslint-disable-line no-use-before-define
export type ImmutableJSONMap = Immutable.Map<string, ImmutableJSON>;
export type ImmutableJSONList = Immutable.List<ImmutableJSON>;
*/

export type ImmutableJSON = any;
export type ImmutableJSONMap = any;

export type ExecutionCount = number | null;

export type MimeBundle = Immutable.Map<string, ImmutableJSON>;

export type ExecuteResultModelType = {
  output_type: string, //'execute_result',
  execution_count: ExecutionCount,
  data: MimeBundle,
  metadata: ImmutableJSONMap,
}

export type DisplayDataModelType = {
  output_type: string, // 'display_data',
  data: MimeBundle,
  metadata: ImmutableJSONMap,
}

export type StreamOutputModelType = {
  output_type: string, // 'stream',
  name: string, // 'stdout' | 'stderr',
  text: string,
}

export type ErrorOutputModelType = {
  output_type: string, // 'error',
  ename: string,
  evalue: string,
  traceback: Immutable.List<string>,
}

export type Output = ExecuteResultModelType | DisplayDataModelType | StreamOutputModelType | ErrorOutputModelType;

export type CodeCellModelType = {
  cell_type: string, // 'code',
  metadata: ImmutableJSONMap,
  execution_count: ExecutionCount,
  source: string,
  outputs: Immutable.List<Output>,
}

export type MarkdownCellModelType = {
  cell_type: string, // 'markdown',
  source: string,
  metadata: ImmutableJSONMap,
}

export type Cell = MarkdownCellModelType | CodeCellModelType;

export type KernelspecMetadataModelType = {
  name: string,
  display_name: string,
}

export type LanguageInfoMetadataModelType = {
  name: string,
  codemirror_mode?: string | ImmutableJSONMap,
  file_extension?: string,
  mimetype?: string,
  pygments_lexer?: string,
}

export type NotebookMetadataModelType = {
  kernelspec: KernelspecMetadataModelType,
  language_info: LanguageInfoMetadataModelType,
}

export type NotebookModelType = {
  cellMap: Immutable.Map<string, Cell>,
  cellOrder: Immutable.List<string>,
  nbformat: number, // 4,
  nbformat_minor: number, // 0 | 1 | 2 | 3 | 4,
  metadata: NotebookMetadataModelType,
}
