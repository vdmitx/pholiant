import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../../logo.png';

export default function ActionAreaCard() {
  return (
    <div className='grid grid-cols-4 gap-4 content-center ...'>
      {itemData.map((item) => (
      <Card sx={{ maxWidth: 345 }} >
          <CardActionArea key={item.id} >
          <CardMedia
            component="img"
            height="140"
            image={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      ))};
    </div>
  );
}

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    author: "swabdesign",
    description: "lorem10",
    skills: "...",
    peyperhour: "..."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];
