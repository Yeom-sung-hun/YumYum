import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
          main: "#8d6e63"
        },
        secondary: {
          main: "#ffffff"
        },
        third: {
            main: "000000"
        }
    },
    overrides: {
      MuiTabs: {
        indicator: {
          backgroundColor: "black",
          height: "1px",
        },
      },
      MuiTab: {
          root: {
            '&$selected': {
                color: "black",
                fontWeight: 800,
            },
          },
          selected: {},
      },
      MuiAppBar: {
          root: {
            backgroundColor: '#F4D503',
            boxShadow: "none"
          }
      },
      MuiAvatar: {
          root: {
            border: "2px solid white"
          }
      },

    }
  });
