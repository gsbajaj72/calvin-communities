const model = require('cassandra-driver');

const connectionString = require('../../../../config');
// connecting to cassandra
const COMMUNITIES_COUNTER_TABLE = 'communitiescounter';

const client = new model.Client({
  contactPoints: [connectionString.contact],
  protocolOptions: { port: connectionString.port },
  keyspace: connectionString.keyspace,
});

function getcounter(domain, done) {
  const query = `SELECT * FROM ${COMMUNITIES_COUNTER_TABLE} WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

function incrementmember(domain, done) {
  const query = `UPDATE ${COMMUNITIES_COUNTER_TABLE} SET members_count = members_count + 1 WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

function incrementinvitation(domain, done) {
  const query = `UPDATE ${COMMUNITIES_COUNTER_TABLE} SET invitations_count = invitations_count + 1 WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

function incrementrequests(domain, done) {
  const query = `UPDATE ${COMMUNITIES_COUNTER_TABLE} SET requests_count = requests_count + 1 WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

function incrementtools(domain, done) {
  const query = `UPDATE ${COMMUNITIES_COUNTER_TABLE} SET tools_count = tools_count + 1 WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

function decrementrequests(domain, done) {
  const query = `UPDATE ${COMMUNITIES_COUNTER_TABLE} SET requests_count = requests_count - 1 WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

function decrementmember(domain, done) {
  const query = `UPDATE ${COMMUNITIES_COUNTER_TABLE} SET members_count = members_count - 1 WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

function decrementinvitation(domain, done) {
  const query = `UPDATE ${COMMUNITIES_COUNTER_TABLE} SET invitations_count = requests_count - 1 WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

function decrementtools(domain, done) {
  const query = `UPDATE ${COMMUNITIES_COUNTER_TABLE} SET tools_count = tools_count - 1 WHERE domain='${domain}'`;
  return client.execute(query, (err, result) => {
    if (!err) {
      done(err, result.rows);
    } else {
      done(err, undefined);
    }
  });
}

module.exports = {
  incrementrequests,
  incrementinvitation,
  getcounter,
  incrementmember,
  incrementtools,
  decrementtools,
  decrementmember,
  decrementrequests,
  decrementinvitation,

};
