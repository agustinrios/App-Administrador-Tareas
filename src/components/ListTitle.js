import { makeStyles, Typography } from "@material-ui/core"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

export const ListTitle = () => {

  const clases = useStyle();

  return (
    <div className={clases.title}>
      <Typography className={clases.titleText}>
        To Do
      </Typography>
      <MoreHorizIcon />
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  title: {
    display: "flex",
    margin: theme.spacing(1),
  },
  titleText: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  }
}))

export default ListTitle
