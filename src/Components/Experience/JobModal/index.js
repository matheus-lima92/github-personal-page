import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';
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
        <Modal.Content scrolling>
            <CompanyLogo company={jobModal} />
            <CompanyInformation>
                <div>
                    <b>Empresa: </b>
                    <span>{jobModal}</span>
                </div>
            </CompanyInformation> 
        </Modal.Content>
        <Modal.Actions>
        <Button basic size="small" onClick={() => hideJobModal()}>Ok</Button>
        </Modal.Actions>
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
