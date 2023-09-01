import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";


function List({ list }) {
    return (
        <div className="d-flex flex-wrap justify-content-space-around" >
            {list.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 245 }} key={index} className="m-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="195"
                                image={item.images[0]}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* {item.name.common} */}
                                </Typography>
                                <Typography variant="body2" className='mt-2' color="text.secondary">
                                    <span className='p-1 '>price</span>  {item.price}
                                </Typography>

                                <Typography variant="body2" className='mt-2' color="text.secondary">
                                    <span className='p-1'>Description</span>     {item.description}
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                more
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default List;