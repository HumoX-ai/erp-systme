/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  TableProps,
} from "@nextui-org/react";
import { CustomLoading } from "../..";
import useBaseStore from "../../../store/base";

// const rows = [...];

// const columns = [...];
interface CustomTableTypes extends PropsWithChildren<TableProps> {
  columns: any[];
  rows: any[];
  loading?: boolean;
}

const CustomTable: FC<CustomTableTypes> = ({ columns, rows, ...rest }) => {
  const { refresh } = useBaseStore();

  return (
    <Table aria-label="Custom table" {...rest}>
      <TableHeader>
        {columns?.map((column, index) => (
          <TableColumn key={index}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody
        emptyContent={"No data"}
        isLoading={true}
        loadingContent={<CustomLoading loading={refresh} />}
      >
        {rows?.length
          ? rows?.map((record: any, rowIndex: number) => (
              <TableRow key={rowIndex}>
                {columns?.map((column, colIndex) => (
                  <TableCell key={colIndex}>
                    {column.render
                      ? column?.render(record, rows)
                      : getKeyValue(record, column?.dataIndex)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          : []?.map((record: any, rowIndex: number) => (
              <TableRow key={rowIndex}>
                {columns?.map((column, colIndex) => (
                  <TableCell key={colIndex}>
                    {column.render
                      ? column?.render(record, rows)
                      : getKeyValue(record, column?.dataIndex)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
};

CustomTable.defaultProps = {
  rows: [],
  columns: [],
  loading: false,
};

export default CustomTable;
