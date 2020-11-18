import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLoading } from '../../store/actions/Loading.action'
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'


const styles = {
    progress: {
        marginRigth: '15px'
    },
    modal:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        heigth: '100%'
    },
    paper: {
        bacgrondColor: '#fff',
        padding: '15px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection: 'row',
        outline: 'none'

    }
}

export class Lading extends Component {
    render() {

   
        const {classes} = this.props;
        return (
          <Modal
          open={this.props.loading.open}
          onClose={this.handleClose}
          className={classes.modal}
          >
              <div>
                <CircularProgress size={100}  className={classes.progress}/>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                    {this.props.loading.msg}
                </Typography>
              </div>
          </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loadingReducer
})

const mapDispatchToProps = dispatch => ({
    changeLoading: (value) => dispatch(changeLoading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Lading))
