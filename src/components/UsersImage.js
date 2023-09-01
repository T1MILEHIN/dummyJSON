import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";


function UsersImage({ list }) {
    return (
        <div className="d-flex flex-wrap justify-content-space-around" >
            {list.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 245 }} key={index} className="m-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="195"
                                image={item.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.firstName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.email}
                                </Typography>
                                <Typography variant="body2" className='mt-2' color="text.secondary">
                                    <span className='p-1 '>gender</span>  {item.gender}
                                </Typography>

                                <Typography variant="body2" className='mt-2' color="text.secondary">
                                    <span className='p-1'>userAgent</span>     {item.userAgent}
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

export default UsersImage;