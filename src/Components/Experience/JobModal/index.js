import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hideJobModal } from 'actions/jobModal';

const JobModal = ({ jobModal, hideJobModal }) => (
    <Modal
        open={!!jobModal}
        style={{ height: '300px', margin: 'auto', maxWidth: '500px' }}
        closeIcon
        onClose={() => hideJobModal()}
    >
        <Modal.Header>
            teste
        </Modal.Header>
        <Modal.Content>
        </Modal.Content>
        {/* <Modal.Actions>
        <Button basic size="small" onClick={onNo}>Não</Button>
        <Button
            positive
            size="small"
            onClick={onYes}
        >
            Sim
        </Button>
        </Modal.Actions> */}
    </Modal>
);


JobModal.propType = {
    hideJobModal: PropTypes.func.isRequired,
    jobModal: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    jobModal: state.jobModal,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	hideJobModal,
}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(JobModal);
