import * as Immutable from 'immutable'; // This is required
import ImmutableModel from 'flow-immutable-models'; // Make sure you copied this file into your repo

export type ImmutableJSON = | string | number | boolean | null
                            | ImmutableJSONMap | ImmutableJSONList; // eslint-disable-line no-use-before-define
export type ImmutableJSONMap = Immutable.Map<string, ImmutableJSON>;
export type ImmutableJSONList = Immutable.List<ImmutableJSON>;

export type ExecutionCount = number | null;

export type MimeBundle = Immutable.Map<string, ImmutableJSON>;

export type ExecuteResultModelType = {
  output_type: 'execute_result',
  execution_count: ExecutionCount,
  data: MimeBundle,
  metadata: ImmutableJSONMap,
}

export type DisplayDataModelType = {
  output_type: 'display_data',
  data: MimeBundle,
  metadata: ImmutableJSONMap,
}

export type StreamOutputModelType = {
  output_type: 'stream',
  name: 'stdout' | 'stderr',
  text: string,
}

export type ErrorOutputModelType = {
  output_type: 'error',
  ename: string,
  evalue: string,
  traceback: Immutable.List<string>,
}

export type OutputModelType = ExecuteResultModelType | DisplayDataModelType | StreamOutputModelType | ErrorOutputModelType;

export type CodeCellModelType = {
  cell_type: 'code',
  metadata: ImmutableJSONMap,
  execution_count: ExecutionCount,
  source: string,
  outputs: Immutable.List<OutputModelType>,
}

export type MarkdownCellModelType = {
  cell_type: 'markdown',
  source: string,
  metadata: ImmutableJSONMap,
}

export type CellModelType = MarkdownCellModelType | CodeCellModelType;

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

export type Notebook = {
  cellMap: Immutable.Map<string, CellModelType>,
  cellOrder: Immutable.List<string>,
  nbformat: 4,
  nbformat_minor: 0 | 1 | 2 | 3 | 4,
  metadata: NotebookMetadataModelType,
}
