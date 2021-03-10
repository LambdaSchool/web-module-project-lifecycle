import { Follower } from '../models/User.model'

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

interface FollwersListProps {
    followers: Follower[]
}

const FollowerListItem: React.FC<ListItemProps<'a', { button?: true, href: string }>> = (props) => {
    return (
        <ListItem button component="a" {...props} target="__blank" rel="noopener noreferrer" />
    )
}

const useStyles = makeStyles({
    root: {
        marginTop: '1rem'
    }
})

const FollowersList: React.FC<FollwersListProps> = ({ followers }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Typography>
                Followers:
            </Typography>
            <List>
                {followers.map(follower => {
                    return (
                        <FollowerListItem key={follower.id} href={follower.url}>
                            <ListItemAvatar>
                                <Avatar alt="Follower avatar" src={follower.avatar} />
                            </ListItemAvatar>
                            <ListItemText primary={follower.username} />
                        </FollowerListItem>
                    )
                })}
            </List>
        </Box>
    )
}

export default FollowersList