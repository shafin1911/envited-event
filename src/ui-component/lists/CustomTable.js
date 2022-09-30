import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Badge, Button, Popper } from "@mui/material";
// import { visuallyHidden } from "@mui/utils";

// project imports
import config from "config";
import Loader from "ui-component/Loader";
import NotFoundPage from "ui-component/utils/NotFoundPage";

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    numSelected,
    rowCount,
    enableBatchOp,
    tableHeader,
    // order,
    // onRequestSort,
    // orderBy,
  } = props;
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead>
      <TableRow>
        {enableBatchOp && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
        )}
        {tableHeader.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            align={"left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            // sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
            {/* <TableSortLabel
              // active={orderBy === headCell.id}
              // direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel> */}
          </TableCell>
        ))}
        {<TableCell></TableCell>}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
  // order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  // orderBy: PropTypes.string.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected, headerLabel, searchComponent, filterComponent } = props;
  const [openFilter, setOpenFilter] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h2"
          id="tableTitle"
          component="div"
        >
          {headerLabel}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Box display="flex">
          <Box mr={1}>{searchComponent}</Box>
          {filterComponent && (
            <>
              <Tooltip title={openFilter ? "" : "Filter list"}>
                <Badge
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  badgeContent={<Box fontSize="8px">X</Box>}
                  color="error"
                  invisible={!openFilter}
                  onClick={(event) => {
                    event.preventDefault();
                    setAnchorEl(anchorEl ? null : event.currentTarget);
                    setOpenFilter(!openFilter);
                  }}
                >
                  <IconButton sx={{ minWidth: "54px" }}>
                    <FilterListIcon />
                  </IconButton>
                </Badge>
              </Tooltip>
              <Popper
                id={"filter-popper"}
                open={openFilter}
                anchorEl={anchorEl}
                placement="bottom-end"
                style={{
                  zIndex: 999,
                }}
              >
                <Paper elevation={1}>
                  <Box sx={{ p: 2, bgcolor: "white" }}>{filterComponent}</Box>
                </Paper>
              </Popper>
            </>
          )}
        </Box>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function CustomTable({
  enableBatchOp = false,
  tableRows = [],
  tableHeader = [],
  actionButtons = [],
  totalRowItems = 0,
  headerLabel = "Table",
  handleChangePage = () => {},
  page,
  rowsPerPage,
  setRowsPerPage,
  searchComponent,
  loading,
  notFoundLabel,
  filterComponent,
}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  // const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tableRows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  const handleChangeRowsPerPage = (event) => {
    // setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
    handleChangePage(0, parseInt(event.target.value, 10));
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - totalRowItems) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          headerLabel={headerLabel}
          searchComponent={searchComponent}
          filterComponent={filterComponent}
        />
        <TableContainer sx={{ maxHeight: "440px" }}>
          {loading ? (
            <Loader />
          ) : tableRows?.length > 0 ? (
            <Table
              sx={{ minWidth: 750, zIndex: 1 }}
              aria-labelledby="tableTitle"
              stickyHeader
              // size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                enableBatchOp={enableBatchOp}
                tableHeader={tableHeader}
                numSelected={selected.length}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={tableRows.length}
                // order={order}
                // orderBy={orderBy}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {
                  // stableSort(rows, getComparator(order, orderBy))
                  tableRows
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => {
                            if (enableBatchOp) handleClick(event, row.id);
                          }}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={`row-id-${row.id}`}
                          selected={isItemSelected}
                        >
                          {enableBatchOp && (
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                  "aria-labelledby": labelId,
                                }}
                              />
                            </TableCell>
                          )}
                          {row.items.map((columnItem, index) => (
                            <TableCell
                              align="left"
                              key={`${row.id}-column-id-${columnItem}-${index}`}
                              sx={{
                                maxWidth: "120px",
                                overflow: "auto",
                                overflowWrap: "break-word",
                              }}
                            >
                              {columnItem}
                            </TableCell>
                          ))}
                          <TableCell align="left">
                            <Box display="flex">
                              {actionButtons.length > 0 &&
                                actionButtons.map((actionButtonItem, index) => (
                                  <Box
                                    key={`action-button-id-${actionButtonItem.id}-${index}`}
                                  >
                                    <Button
                                      sx={{
                                        color:
                                          actionButtonItem.color ||
                                          "primary.800",
                                      }}
                                      onClick={() =>
                                        actionButtonItem.onClick(row.id)
                                      }
                                      variant="text"
                                      disabled={
                                        row?.actionButtons &&
                                        row.actionButtons[actionButtonItem.id]
                                      }
                                    >
                                      {actionButtonItem.label}
                                    </Button>
                                  </Box>
                                ))}
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })
                }
                {emptyRows > 0 && (
                  <TableRow
                  // style={
                  //   {
                  //     height: (dense ? 33 : 53) * emptyRows,
                  //   }
                  // }
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          ) : (
            <Box>
              <NotFoundPage label={notFoundLabel} />
            </Box>
          )}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={config.tableRows}
          component="div"
          count={totalRowItems}
          rowsPerPage={rowsPerPage}
          page={page > 0 ? page : 0}
          onPageChange={(ev, newPage) => handleChangePage(newPage, rowsPerPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label='Dense padding'
      /> */}
    </Box>
  );
}
