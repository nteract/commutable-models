export type ImmutableJSON = | string | number | boolean | null
                            | ImmutableJSONMap | ImmutableJSONList; // eslint-disable-line no-use-before-define
export type ImmutableJSONMap = Immutable.Map<string, ImmutableJSON>;
export type ImmutableJSONList = Immutable.List<ImmutableJSON>;

export type ExecutionCount = number | null;

export type MimeBundle = Immutable.Map<string, ImmutableJSON>;

export type ExecuteResult = {
  output_type: 'execute_result',
  execution_count: ExecutionCount,
  data: MimeBundle,
  metadata: ImmutableJSONMap,
}

export type DisplayData = {
  output_type: 'display_data',
  data: MimeBundle,
  metadata: ImmutableJSONMap,
}

export type StreamOutput = {
  output_type: 'stream',
  name: 'stdout' | 'stderr',
  text: string,
}

export type ErrorOutput = {
  output_type: 'error',
  ename: string,
  evalue: string,
  traceback: Immutable.List<string>,
}

export type Output = ExecuteResult | DisplayData | StreamOutput | ErrorOutput;

export type CodeCell = {
  cell_type: 'code',
  metadata: ImmutableJSONMap,
  execution_count: ExecutionCount,
  source: string,
  outputs: Immutable.List<Output>,
}

export type MarkdownCell = {
  cell_type: 'markdown',
  source: string,
  metadata: ImmutableJSONMap,
}

export type Cell = MarkdownCell | CodeCell;

export type KernelspecMetadata = {
  name: string,
  display_name: string,
}

export type LanguageInfoMetadata = {
  name: string,
  codemirror_mode?: string | ImmutableJSONMap,
  file_extension?: string,
  mimetype?: string,
  pygments_lexer?: string,
}

export type NotebookMetadata = {
  kernelspec: KernelspecMetadata,
  language_info: LanguageInfoMetadata,
}

export type Notebook = {
  cellMap: Immutable.Map<string, Cell>,
  cellOrder: Immutable.List<string>,
  nbformat: 4,
  nbformat_minor: 0 | 1 | 2 | 3 | 4,
  metadata: NotebookMetadata,
}
