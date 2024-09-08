let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');
  
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db).then(() => {
    console.log('Database successfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)
  
const postRoute = require('./routes/post.route')
const adminRoute = require('./routes/admin.route')
const affgroupeRoute = require('./routes/affgroupe.route')
const affprojetRoute = require('./routes/affprojet.route')
const afftacheRoute = require('./routes/afftache.route')
const avprojetRoute = require('./routes/avprojet.route')
const avtacheRoute = require('./routes/avtache.route')
const companyRoute = require('./routes/company.route')
const competenceRoute = require('./routes/competence.route')
const groupeRoute = require('./routes/groupe.route')
const profilRoute = require('./routes/profil.route')
const projetRoute = require('./routes/projet.route')
const tacheRoute = require('./routes/tache.route')
const universiteRoute = require('./routes/universite.route')
const userRoute = require('./routes/user.route')


const messageRoute = require('./routes/message.route')
const notificationRoute = require('./routes/notification.route')
const postulerRoute = require('./routes/postuler.route')
  
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
  
/* Static directory path */
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));
  
/* API root */
app.use('/api', postRoute)
app.use('/apiadmin', adminRoute)
app.use('/apiaffgroupe', affgroupeRoute)
app.use('/apiaffprojet', affprojetRoute)
app.use('/apiafftache', afftacheRoute)
app.use('/apiavprojet', avprojetRoute)
app.use('/apiavtache', avtacheRoute)
app.use('/apicompany', companyRoute)
//app.use('/apiaffprojet', affprojetRoute)
app.use('/apicompetence', competenceRoute)
app.use('/apigroupe', groupeRoute)
app.use('/apiprofil', profilRoute)
app.use('/apiprojet', projetRoute)
app.use('/apitache', tacheRoute)
app.use('/apiuniversite', universiteRoute)
app.use('/apiuser', userRoute)


app.use('/apimessage', messageRoute)
app.use('/apinotification', notificationRoute)
app.use('/apipostuler', postulerRoute)




  
/* PORT */
const port = process.env.PORT || 8000;
  
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
  
/* 404 Handler */
app.use((req, res, next) => {
  next(createError(404));
});
  
/* Base Route */
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
  
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});
  
/* error handler */
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
