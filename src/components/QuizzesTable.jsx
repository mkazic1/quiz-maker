import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from '@mui/material';
import {
  AddBox, Delete, Edit, Quiz,
} from '@mui/icons-material';
import CreateQuizModal from './CreateQuizModal';
import DeleteModal from './DeleteModal';
import TABLE_HEADER from '../constants/table';
import { headerCellStyle, rowCellStyle, tableBox } from '../style/TableStyle';
import { buttonsBoxStyle, circularLoaderStyle } from '../style/CommonStyle';

const QuizzesTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = React.useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const fetchData = async () => {
    setIsDataLoading(true);
    try {
      const response = await fetch('/api/quizzes');
      const data = await response.json();
      console.log(data);
      setQuizzes(data.quizzes);
    } catch (error) {
      console.log(error);
    }
    setIsDataLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box sx={buttonsBoxStyle}>
        <Tooltip title="Create new quiz">
          <Button
            startIcon={<AddBox />}
            size="medium"
            variant="contained"
            type="submit"
            onClick={() => setIsCreateModalOpened(true)}
          >
            Create new quiz
          </Button>
        </Tooltip>
        <CreateQuizModal
          isDialogOpened={isCreateModalOpened}
          setIsDialogOpened={setIsCreateModalOpened}
        />
      </Box>
      <Box sx={tableBox}>
        {isDataLoading ? (
          <Box sx={circularLoaderStyle}>
            <CircularProgress sx={{ color: 'info.main' }} />
          </Box>
        ) : (
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {TABLE_HEADER?.map((item) => (
                      <TableCell key={item?.key} sx={headerCellStyle}>
                        {item?.title}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quizzes?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((quiz) => {
                    const isItemSelected = isSelected(quiz.id);

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={quiz?.id}
                        sx={{ cursor: 'pointer' }}
                        onClick={(event) => handleClick(event, quiz.id)}
                        aria-checked={isItemSelected}
                        selected={isItemSelected}
                      >
                        {TABLE_HEADER?.map((headerItem) => {
                          if (headerItem?.key === 'try-out') {
                            return (
                              <Tooltip title="Try out the quiz">
                                <TableCell key={headerItem?.key} sx={rowCellStyle}>
                                  <IconButton>
                                    <Quiz fontSize="medium" sx={{ color: 'primary.main' }} />
                                  </IconButton>
                                </TableCell>
                              </Tooltip>
                            );
                          }
                          if (headerItem?.key === 'edit') {
                            return (
                              <Tooltip title="Edit quiz">
                                <TableCell key={headerItem?.key} sx={rowCellStyle}>
                                  <IconButton>
                                    <Edit fontSize="medium" sx={{ color: 'primary.main' }} />
                                  </IconButton>
                                </TableCell>
                              </Tooltip>
                            );
                          }
                          if (headerItem?.key === 'delete') {
                            return (
                              <Tooltip title="Delete quiz">
                                <TableCell key={headerItem?.key} sx={rowCellStyle}>
                                  <IconButton onClick={() => setIsDeleteModalOpened(true)}>
                                    <Delete fontSize="medium" sx={{ color: 'primary.main' }} />
                                  </IconButton>
                                </TableCell>
                              </Tooltip>
                            );
                          }
                          return (
                            <TableCell key={headerItem?.key} sx={rowCellStyle}>
                              {quiz[headerItem?.key]}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={quizzes?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )}
      </Box>
      <DeleteModal
        isDialogOpened={isDeleteModalOpened}
        setIsDialogOpened={setIsDeleteModalOpened}
      />
    </>
  );
};

export default QuizzesTable;
