
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fuse from 'fuse.js';
import { Link } from 'react-router-dom';
import Avatar from 'components/common/Avatar';
import { isIterableArray } from 'helpers/utils';
import Flex from 'components/common/Flex';
import FalconCloseButton from 'components/common/FalconCloseButton';
import SoftBadge from 'components/common/SoftBadge';

function SearchBar() {

    return (
        <Dropdown className="search-box mt-1">
            <Dropdown.Toggle
                as="div"
                data-toggle="dropdown"
                bsPrefix="toggle"
            >
                <Form className="position-relative">
                    <Form.Control
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                        className="rounded-pill search-input"
                    />
                    <FontAwesomeIcon
                        icon="search"
                        className="position-absolute text-400 search-box-icon"
                    />

                    <div
                        className="search-box-close-btn-container"
                    // style={{ right: '10px', top: '8px' }}
                    >
                        {/* <FalconCloseButton
                            size="sm"
                            noOutline
                        /> */}
                    </div>
                </Form>
            </Dropdown.Toggle>
        </Dropdown>
    )
}
export default SearchBar;