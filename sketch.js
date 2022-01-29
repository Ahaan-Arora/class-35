var ball, database;
var position;
var ballpos;




function setup()
{
    createCanvas(500,500);

    database=firebase.database();

    ballpos=database.ref('ball/position');// refers to the database
    ballpos.on("value",readPosition);// is a listener

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

}

function draw()
{
    background("white");

    if(position!== undefined)
    {
        if(keyDown(LEFT_ARROW))
        {
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW))
        {
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW))
        {
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW))
        {
            writePosition(0,1);
        }

       
        drawSprites();
    }
}


function readPosition(data)
{
    position=data.val();

    ball.x=position.x;
    ball.y=position.y;

}

function writePosition(x,y)
{
    database.ref('ball/position').set(
                                        { 
                                            x: position.x+x  , 
                                            y: position.y+y
                                        });
}