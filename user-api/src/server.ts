import app from "./app/app";
import { PORT } from "./app/config";

// Run server local
app.listen(5001, function () {
    console.log(`Application is running on: http://localhost:${PORT}`)
})
