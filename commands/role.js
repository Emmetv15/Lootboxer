module.exports = {
	name: 'role',
    description: 'Used to give yourself a role',  
    args: false,
    usage: '<user> <role>',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};