/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
} from "@nextui-org/react";
import { CustomLoading } from "../..";
import useBaseStore from "../../../store/base";
import { CustomTableTypes } from "../../../types";

const CustomTable: FC<CustomTableTypes> = ({
  columns,
  rows,
  onRowClick,
  isPagination = true,
  ...rest
}) => {
  const { refresh } = useBaseStore();

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(rows?.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows?.slice(start, end);
  }, [page, rows]);

  return (
    <Table
      aria-label="Custom table"
      isStriped
      {...rest}
      bottomContent={
        isPagination && rows?.length > 0 ? (
          <div className="flex w-full justify-end">
            <Pagination
              initialPage={1}
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        {columns?.map((column, index) => (
          <TableColumn key={index}>{column?.label}</TableColumn>
        ))}
      </TableHeader>
      {items?.length ? (
        <TableBody
          isLoading={refresh}
          loadingContent={<CustomLoading loading={refresh} />}
        >
          {items?.map((record: any, rowIndex: number) => {
            return (
              <TableRow key={rowIndex}>
                {columns?.map((column, colIndex) => {
                  return (
                    <TableCell
                      key={colIndex}
                      onClick={() => onRowClick && onRowClick(record, rows)}
                    >
                      {column?.render
                        ? column?.render(record, rows, rowIndex + 1)
                        : getKeyValue(record, column?.dataIndex)}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      ) : (
        <TableBody emptyContent={"Ma'lumot yo'q"}>{[]}</TableBody>
      )}
    </Table>
  );
};

CustomTable.defaultProps = {
  rows: [],
  columns: [],
  loading: false,
};

export default CustomTable;
