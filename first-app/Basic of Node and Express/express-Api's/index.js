const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
]

// app.get();
// app.post();
// app.put();
// app.delete()

app.get('/',function(req,res)
{
    res.send('hello world');
});

app.get('/api/courses',(req,res)=>
{
    res.send(courses);

});


app.get('/api/courses/:id',(req,res)=>
{

    let course = '';
    for(var i=0; i<courses.length;i++)
    {
        if(courses[i].id === parseInt(req.params.id))
        {
            course = req.params.id;
             
        }
    }
    console.log(`The value of the course is ${course}`);
    if(!course)
    {
        res.status(404).send("The given id is not found... kindly enter the correct one please");
        return;
    }
    else
    {
        res.send(req.params);
    }
});



app.post('/api/courses',(req,res)=>
{

    if(!req.body.name || req.body.name.length <3)
    {
        res.status(400).send('Name is not with proper legnth kindly check it ');
    }
    const course = {
        id:courses.length+1,
        name: req.body.name
    };
    courses.push(course);

    res.send(course);
});


app.put('/api/courses/:id',(req,res)=>
{
    let course = '';
    for(var i=0; i<courses.length;i++)
    {
        
        if(courses[i].id === parseInt(req.params.id))
        {
            courses[i].name = req.body.name;
            console.log(courses[i]);
            course= req.params;
             
        }
        console.log(courses[i]);
    }
    console.log(`The value of the course is ${course}`);
    if(!course)
    {
        res.status(404).send("The given id is not found... kindly enter the correct one please");
        return;
    }
    else
    {
        res.send(courses);
        // res.send(req.params);
    }
    
});
app.delete('/api/courses/:id',(request,resource)=>
{
    
});


const port = process.env.port || 3000;

app.listen(port,()=>
{
    console.log(`Listing on the port ${port} ....`);
});