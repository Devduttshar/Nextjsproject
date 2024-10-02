import React from "react";
import Index from "../index";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

// Sample blog data (25 items)
const blogData = Array(25).fill().map((_, index) => ({
  id: index + 1,
  title: `Job Opportunity #${index + 1}`,
  description: `This is the description for job opportunity #${index + 1}. Learn more about the position and apply now.`,
  image: `https://via.placeholder.com/150?text=Job+Image+${index + 1}`, // Placeholder image
}));

const IndexPage = () => {
  return (
    <Container>
      <Index />
      <Typography variant="h4" align="center" gutterBottom>
        Our Latest Jobs
      </Typography>
      <Grid container spacing={4}>
        {blogData.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
            <BlogCard
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// BlogCard component using Material-UI
const BlogCard = ({ title, description, image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default IndexPage;
