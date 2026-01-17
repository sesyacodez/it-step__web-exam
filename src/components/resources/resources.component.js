import classes from "./resources.module.css";

export const Resources = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>MORE USEFUL RESOURCES</h2>
      <div className={classes.resourceList}>
        <div className={classes.resourceItem}>
          <h3 className={classes.resourceTitle}>Color Names</h3>
          <p className={classes.resourceDescription}>
            Browse and search through a comprehensive list of color names to
            find the perfect shade for your project.
          </p>
        </div>
        <div className={classes.resourceItem}>
          <h3 className={classes.resourceTitle}>Free Fonts</h3>
          <p className={classes.resourceDescription}>
            Discover and collect beautiful free fonts for your designs from our
            curated list of typography resources.
          </p>
        </div>
        <div className={classes.resourceItem}>
          <h3 className={classes.resourceTitle}>Collage Maker</h3>
          <p className={classes.resourceDescription}>
            Create stylish collages by combining your photos and palettes in
            seconds.
          </p>
        </div>
        <div className={classes.resourceItem}>
          <h3 className={classes.resourceTitle}>Browse Gradients</h3>
          <p className={classes.resourceDescription}>
            Explore beautiful gradients for your projects or create your own
            gradient with the Gradient Maker.
          </p>
        </div>
        <div className={classes.resourceItem}>
          <h3 className={classes.resourceTitle}>Gradient Palette</h3>
          <p className={classes.resourceDescription}>
            Create a gradient palette between two colors and export it in
            various formats.
          </p>
        </div>
        <div className={classes.resourceItem}>
          <h3 className={classes.resourceTitle}>Image Converter</h3>
          <p className={classes.resourceDescription}>
            Convert images to different formats with ease.
          </p>
        </div>
      </div>
    </div>
  );
};
