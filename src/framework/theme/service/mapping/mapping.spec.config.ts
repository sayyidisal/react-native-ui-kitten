export const mapping = {
  Test: {
    appearance: {
      default: {
        mapping: {
          size: 36,
            innerSize: 24,
            borderWidth: 2,
            borderColor: 'grayPrimary',
            selectColor: 'transparent',
            state: {
            active: {
              borderColor: 'grayDark',
            },
            checked: {
              borderColor: 'bluePrimary',
                selectColor: 'bluePrimary',
            },
            disabled: {
              borderColor: 'grayLight',
            },
            'active.checked': {
              borderColor: 'blueDark',
            },
            'checked.disabled': {
              selectColor: 'grayPrimary',
            },
          },
        },
        variant: {
          status: {
            info: {
              mapping: {
                state: {
                  checked: {
                    borderColor: 'orangePrimary',
                      selectColor: 'orangePrimary',
                  },
                  'active.checked': {
                    borderColor: 'orangeDark',
                  },
                },
              },
            },
            success: {
              mapping: {
                state: {
                  checked: {
                    borderColor: 'tealPrimary',
                      selectColor: 'tealPrimary',
                  },
                  'active.checked': {
                    borderColor: 'tealDark',
                  },
                },
              },
            },
          },
          size: {
            big: {
              mapping: {
                size: 42,
                  innerSize: 28,
              },
            },
            small: {
              mapping: {
                size: 30,
                  innerSize: 20,
              },
            },
          },
        },
      },
      custom: {
        mapping: {
          borderWidth: 4,
            state: {
            active: {
              borderColor: 'grayLight',
            },
          },
        },
        variant: {
          status: {
            success: {
              mapping: {
                borderColor: 'tealPrimary',
              },
            },
          },
        },
      },
    },
  },
  Empty: {
    appearance: {},
  },
};