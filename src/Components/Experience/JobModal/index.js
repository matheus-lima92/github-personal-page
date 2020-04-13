import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hideJobModal } from 'actions/jobModal';
import { CompanyLogo, CompanyInformation } from './styles';

const JobModal = ({ jobModal, hideJobModal }) => (
    <Modal
        open={!!jobModal}
        style={{ height: '300px', width: '90%', position: 'relative', top: '-20vh', margin: 'auto', maxWidth: '400px' }}
        closeIcon
        onClose={() => hideJobModal()}
    >
        <Modal.Content>
            <CompanyLogo company={jobModal} />
            <CompanyInformation>
                lorem ipsum dolor
                <br />
                lorem ipsum dolor
                <br />
                lorem ipsum dolor
                <br />
                lorem ipsum dolor
                <br />
                lorem ipsum dolor
                <br />
                lorem ipsum dolor
                <br />
                lorem ipsum dolor
            </CompanyInformation> 
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
