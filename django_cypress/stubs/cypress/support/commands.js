Cypress.Commands.add('csrfToken', () => {
    return cy.request({
        method: 'GET',
        url: '/__cypress__/csrftoken/',
        log: false,
    });
})

Cypress.Commands.add('manage', (command, parameters = []) => {
    return cy.csrfToken().then((token) => {
        return cy.request({
            method: 'POST',
            url: '/__cypress__/manage/',
            body: { command: command, parameters: parameters  },
            log: false,
            headers: {
                "X-CSRFToken": token["body"]["token"]
            }
        });
    });
})

