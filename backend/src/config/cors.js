import cors from "cors";

const corsOptions = {
  origin: "*", 
  optionsSuccessStatus: 200,
};

export default cors(corsOptions);
