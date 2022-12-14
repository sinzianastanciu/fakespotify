let initialState = {
  genre: "",
  personality: '',
  dance: "",
  instrument: "",
  mode: "",
  tempo: "",
  popularity: "",
  valance: "",
  recommendations: "",
  token: "",
  currStep: "Start",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GENRE":
      return {
        ...state,
        genre: action.payload,
      };
      case "SET_PERSONALITY":
        return {
          ...state,
          personality: action.payload,
        };
    case "SET_DANCE":
      return {
        ...state,
        dance: action.payload,
      };
    case "SET_INSTRUMENT":
      return {
        ...state,
        instrument: action.payload,
      };
    case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "SET_TEMPO":
      return {
        ...state,
        tempo: action.payload,
      };
    case "SET_POPULARITY":
      return {
        ...state,
        popularity: action.payload,
      };
    case "SET_VALANCE":
      return {
        ...state,
        valance: action.payload,
      };
    case "RECOMMENDATIONS":
      return {
        ...state,
        recommendations: action.payload,
      };
    case "GET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "CURR_STEP":
      return {
        ...state,
        currStep: action.payload,
      };

    default:
      return state;
  }
};
