# Express JS

## Important Links
- Free Account
    - link: `www.mlab.com`
    - username: `pramod.jingade`
    - password: `zuko2352`
    - Free DB: `mongodb://<dbuser>:<dbpassword>@ds121955.mlab.com:21955/standupmeetingnotes`

# Setting up the Express Engine

- Setting the default express scaffolding application

```js
npm install -g express express-generator
```
- The base package.json

```js
{
  "name": "mongo-baciscs-pluralsight",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.18.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.15.5",
    "morgan": "~1.9.0",
    "serve-favicon": "~2.4.5",
    "swig": "^1.4.2"
  }
}
```

- Setting SWIG as the default view engine

```js
// view engine setup
//assign swig as the view engine
app.engine('html',swig.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','html');
```

# Mongoose Schema Data types

```js
var mongoose = require('Mongoose');
var Schema  = mongoose.Schema;
var customerSchema = new Schema({fieldname:SchemaType})
```

## The following are some of the mongoose schema types

|Mongoose Schema Type | Javascript Data type |
|:--------------------|---------------------:|
|String|String|
|Number|Number|
|`Date`|Object|
|`Buffer`|Object|
|Boolean|Boolean|
|`Mixed`|Object|
|`ObjectId`|Object|
|Array|Array(Object)|

# Advantage of Defining schemas

In Mongoose, `everything starts with a schema`. You can nest Schema Definitions as shown below!
> Note: Schema is used to create a model in Mongoose


```js
var mongoose = require('Mongoose');
var Schema  = mongoose.Schema;
var customerSchema = new Schema({fieldname:SchemaType})

//parent customer
var addressSchema = new Schema({
  place:String,
  city:String,
  country:String,
  pincode:Number
});
var customerSchema = new Schema({
  name : {
    first:String,
    last:String
  },
  address:[addressSchema],
  createdOn:{type:Date,default:Date.now},
  isActive:{type:Boolean,default:true}
})
```

# Steps to persist Data 

> `STEP 1`: Create a Schema

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Think of Schema also as an Interface in Typescript
var customSchema = new Schema({
  name:String,
  email:String
});
```

> `STEP 2`: Create a Model, using the Schema `customSchema`

```js
var customModel = mongoose.model('CustomModel', customSchema);
```

> `STEP 3`: Create a document / store data using the model

```js
var customDocument = new CustomModel({
  name:'Pramod',
  email:'pramod.jingade@philips.com'
})
```

# Mongoose Document Queries

# Query using variable / callback function

You can query on a `Model` instance

```js
var Standup = mongoose.model('Standup',customSchema);
var query = Standup.find() ; // If no callback is mentioned inside the .find(), it returns a Query object
query.exec(function(err,results){
//Using the query variable to execute the search string
});//end:exec
var result = Standup.find(function(err,results){
//This time we are passing a callback function
//It returns the standup model, but this time it even executes the query
});//end;find
```

# Query with a parameter

You can pass in a search string as follows:

```js
var query = Standup.find({memberName:'Pramod'},function(err,results){
});//end:find
```

# Limit the returned fields

You can limit the number of fields return

```js
var query = Standup.find({memberName:'Pramod'},'memberName projectName', function(err,results){
});//end:find
```

# Find one

```js
var query = Standup.findOne();
query.exec(function(err,results){

});//end:exec
```

# Find by Id

```js
var id = '1234567876543234567876543'
var query = Standup.findById(id);
query.exec(function(err,results){

});//end:exec
```

# Return all column values, except a specific one

```js
var query = Standup.findById(id,'-impediment');
```

# Using where 

```js
Standup.where('memberName').gte(19).lt(40).exec(function(err,results){
//where uses a path / name of the document field
});//end:where
```

# Comparison Query Operators (Also available in MongoDB)

|Operator | Description |
|:--------|------------:|
| `$gt`| Greater than |
| `$gte` | Greater than or equal to |
| `$in` | exists in |
| `$lt` | Less than |
| `$lte` | Less than or equal to |
| `$ne` | Not equal to  |
| `$nin` | does not exist |


# Model Update

```js
var Standup = require('../models/standup.server.model.js');
var condition = {memberName:'mary'};
var update = {impediment: 'None-mary no longer works here'};
Standup.update(condition, update,function(err,numberAffected,rawResponse));
```

# Model Delete/Remove

```js
var Standup = require('../models/standup.server.model.js');
var condition = {memberName:'Pramod'};
Standup.remove(condition,function(err){
// Handle if any errors here
});//end:remove
```

# Mongoose Built In Validators table

|Schema Type|Built-in Validators|
|:----------|------------------:|
|String|`required`, `enum`, `match`|
|Number|`required`, `min`, `max`|
|Date|`required`|
|Buffer|`required`|
|Boolean|`required`|
|Mixed|`required`|
|ObjectId|`required`|
|Array|`required`|


# Custom Validator Syntax

```js
var customValidator = [
  function(){
    return true; //
  },
  'Sorry there was an error'
];
```