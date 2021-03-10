import { makeStyles, } from '@material-ui/core'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import FollowersList from './FollowersList'

import { User } from '../models/User.model'

interface UserCardProps {
    user: User
}

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: `0 auto`
    },
    location: {
        marginTop: '1rem'
    }
})

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    <Link color="inherit" href={user.url} target="_blank" rel="noopener noreferrer">
                        {user.username}
                    </Link>
                </Typography>
                <CardMedia 
                    src={user.avatar}
                    component="img"
                />
                <Typography className={classes.location}>
                    Location: {user.location}
                </Typography>
                <FollowersList followers={user.followers} />
            </CardContent>
        </Card>
    )
}

export default UserCard