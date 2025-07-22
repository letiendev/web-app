import React from 'react';
import { cn } from '@/lib/utils';

interface TableColumn {
  key: string;
  header: string;
  width?: string;
}

interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

interface GlamoTableProps {
  columns: TableColumn[];
  data: TableRow[];
  className?: string;
  onRowClick?: (row: TableRow, index: number, event: React.MouseEvent) => void;
}

export const GlamoTable: React.FC<GlamoTableProps> = ({
  columns,
  data,
  className,
  onRowClick,
}) => {
  return (
    <div className={cn("glamo-card p-8", className)}>
      <table className="glamo-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{ width: column.width }}
                className="glamo-table th"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={(e) => onRowClick?.(row, index, e)}
              className={
                onRowClick
                  ? "cursor-pointer hover:bg-glamo-blue-800/20 transition-colors"
                  : ""
              }
            >
              {columns.map((column) => (
                <td key={column.key} className="glamo-table td">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
