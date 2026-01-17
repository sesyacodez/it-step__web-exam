import classes from "./apps.module.css";

export const Apps = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>PLUGINS AND APPS</h2>
      <div className={classes.appList}>
        <div className={classes.appItem}>
          <h3 className={classes.appTitle}>iOS App</h3>
        </div>
        <div className={classes.appItem}>
          <h3 className={classes.appTitle}>Figma Plugin</h3>
        </div>
        <div className={classes.appItem}>
          <h3 className={classes.appTitle}>Adobe Extension</h3>
        </div>
      </div>
    </div>
  );
};
