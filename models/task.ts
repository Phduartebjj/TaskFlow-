interface TaskInterface<Tinput, TResult> {
  id: string;
  type: TaskType;
  status: StatusEnum;
  input: Tinput;
  result?: TResult;
}

enum StatusEnum {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

type TaskType = "GENERATE_REPORT" | "CALCULATE_STATISTICS" | "PROCESS_CSV";

interface StatisticsInput {
  numbers: number[];
}

interface StatisticsResult {
  sum: number;
  average: number;
  min: number;
  max: number;
}

interface ReportInput {
  sales: {
    product: string;
    amount: number;
  }[];
}

interface ReportResult {
  totalSales: number;
  totalAmount: number;
  averageAmount: number;
}

interface CSVInput {
  content: string;
}

interface CSVResult {
  rows: Record<string, string>[];
  rowCount: number;
}

interface TaskInputMap {
  CALCULATE_STATISTICS: StatisticsInput;
  GENERATE_REPORT: ReportInput;
  PROCESS_CSV: CSVInput;
}

interface TaskResultMap {
  CALCULATE_STATISTICS: StatisticsResult;
  GENERATE_REPORT: ReportResult;
  PROCESS_CSV: CSVResult;
}
