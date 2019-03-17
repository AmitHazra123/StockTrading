import React, { Component } from "react";
import {
  TextField,
  withStyles,
  Button,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  MuiThemeProvider,
  TableFooter,
  createMuiTheme,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import TablePaginationActionsComponent from "../common/TablePaginationActionsComponent";
import { purple } from "@material-ui/core/colors";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }
});

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 8,
      rows: []
    };
  }

  componentDidMount() {
    this.setState({
      rows: [
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        },
        {
          pid: "KTPP27434854",
          tdate: "16-01-2019",
          vdate: "27-03-2019",
          fromcur: "CHF",
          amount1: "220,000",
          tocur: "USD",
          amount2: "223,790.04",
          rate: "0.9830643"
        }
      ]
    });
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  gettingStockDate = id => {};

  handChangePage = (event, page) => {
    this.setState({ page: page });
    if (
      Math.ceil(this.state.rows.length / this.state.rowsPerPage) - 1 ===
      page
    ) {
      this.gettingStockDate(this.state.rows[this.state.rows.length - 1]._id);
    }
  };

  render() {
    const { rows, page, rowsPerPage } = this.state;
    let rws = [];
    if (rows.length > 0 || rws !== null) {
      rws = rows;
    }
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    let dashboardContent = <Spinner />;
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item style={{ marginTop: 50, marginLeft: 300 }}>
            <TextField
              id="tdate"
              label="Trade Date"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="sdate"
              label="Settlement Date"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="vdate"
              label="Valuation Date"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="rate"
              label="Rate"
              className={classes.textField}
              margin="normal"
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              margin="normal"
              style={{ marginTop: 20, width: 200, marginLeft: 50 }}
              href="/search"
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: 30 }}>
          <Typography>Items Matched</Typography>
        </Grid>
        <Grid item>
          <Grid container style={{ marginLeft: 85, marginTop: 50 }}>
            <Grid item>
              <Paper style={{ width: "1300px" }}>
                <div className={classes.tableWrapper}>
                  <Typography>Customer Part</Typography>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Payment Ref</TableCell>
                        <TableCell>Trade Date</TableCell>
                        <TableCell>Value Date</TableCell>
                        <TableCell>From Currency</TableCell>
                        <TableCell>Amount1</TableCell>
                        <TableCell>To Currency</TableCell>
                        <TableCell>Amount2</TableCell>
                        <TableCell>Interest Rate</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.length <= 0 && this.state.loading
                        ? dashboardContent
                        : ""}
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map(row => {
                          return (
                            <TableRow key={row._id}>
                              <TableCell>{row.pid}</TableCell>
                              <TableCell>{row.tdate}</TableCell>
                              <TableCell>{row.vdate}</TableCell>
                              <TableCell>{row.fromcur}</TableCell>
                              <TableCell>{row.amount1}</TableCell>
                              <TableCell>{row.tocur}</TableCell>
                              <TableCell>{row.amount2}</TableCell>
                              <TableCell>{row.rate}</TableCell>
                            </TableRow>
                          );
                        })}
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 48 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={3}
                          rowsPerPageOptions={[8, 15, 30, 60, 100]}
                          page={page}
                          count={rows.length}
                          rowsPerPage={rowsPerPage}
                          onChangePage={this.handChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsComponent}
                        />
                      </TableRow>
                    </TableFooter>
                  </Table>
                  <br />
                  <Typography>Society Generale Part</Typography>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Payment Ref</TableCell>
                        <TableCell>Trade Date</TableCell>
                        <TableCell>Value Date</TableCell>
                        <TableCell>From Currency</TableCell>
                        <TableCell>Amount1</TableCell>
                        <TableCell>To Currency</TableCell>
                        <TableCell>Amount2</TableCell>
                        <TableCell>Interest Rate</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.length <= 0 && this.state.loading
                        ? dashboardContent
                        : ""}
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map(row => {
                          return (
                            <TableRow key={row._id}>
                              <TableCell>{row.pid}</TableCell>
                              <TableCell>{row.tdate}</TableCell>
                              <TableCell>{row.vdate}</TableCell>
                              <TableCell>{row.fromcur}</TableCell>
                              <TableCell>{row.amount1}</TableCell>
                              <TableCell>{row.tocur}</TableCell>
                              <TableCell>{row.amount2}</TableCell>
                              <TableCell>{row.rate}</TableCell>
                            </TableRow>
                          );
                        })}
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 48 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={3}
                          rowsPerPageOptions={[8, 15, 30, 60, 100]}
                          page={page}
                          count={rows.length}
                          rowsPerPage={rowsPerPage}
                          onChangePage={this.handChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsComponent}
                        />
                      </TableRow>
                    </TableFooter>
                  </Table>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
