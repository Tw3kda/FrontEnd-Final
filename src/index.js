import app from './app'
require('./database') 



const port =   4000 ;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});