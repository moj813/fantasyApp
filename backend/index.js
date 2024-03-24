
const express = require("express");
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
	  origin: "http://localhost:3000",
	  methods: ["GET", "POST"],
	  credentials: true,
	},
  });

const userRoutes = require("./routes/User");
const tournamentRoutes = require("./routes/Tournament");
const publicRoutes = require("./routes/Public");
const  scoreRoutes  = require("./routes/Score");
const {setupSocketLogic} = require("./controller/socket");

// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");
// const courseRoutes = require("./routes/Course");
// const contactUsRoute = require("./routes/Contact");

const dbConnect = require("./config/connect");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
dbConnect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);


//routes
app.use("/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);

app.use("/admin/tournament", tournamentRoutes);
app.use("/public",publicRoutes);
app.use("/admin/score",scoreRoutes);

setupSocketLogic(io);

//def route
app.get("/", (req, res) => {
	req.header("Access-Control-Allow-Origin", "http://localhost:3000");
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});



// app.listen(PORT, () => {
// 	console.log(`App is running at ${PORT}`)
// })

server.listen(PORT, () => {
	console.log(`App is running at ${PORT}`);
  });