import React from "react";
import PropTypes from "prop-types";
import { Alert, CloseButton, Messages, List } from "./styles";

export function AlertMessage ({ message, alertType = "info", isOpen, onClose, listStyle = "unstyled" }) {
    return (
        <>
            {isOpen ? (
                <Alert alertType={alertType}>
                    {Array.isArray(message) ? (
                        <Messages>
                            {message.map((err, i) => (
                                <List listStyle={listStyle} key={i}>
                                    {err}
                                </List>
                            ))}
                        </Messages>
                    ) : (
                        <span>{message}</span>
                    )}
                    <CloseButton
                        buttonType="unstyled"
                        domID="alert-close-button"
                        name="X"
                        onClick={onClose}
                        size="medium"
                        type="button"
                    />
                </Alert>
            ) : (
                ""
            )}
        </>
    );
}

AlertMessage.propTypes = {
    alertType: PropTypes.oneOf(["warning", "info", "success"]).isRequired,
    isOpen: PropTypes.bool.isRequired,
    listStyle: PropTypes.oneOf(["number", "unstyled", "circle", "disc", "square"]),
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    onClose: PropTypes.func.isRequired,
};
