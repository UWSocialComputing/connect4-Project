import Dobbie from './Dobbie'

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.friends = new Set();  // set of user IDs
        this.dobbies = new Set();  // set of Dobbie objects
        this.photos = new Set();  // probably a set of photo file paths
        this.profile = new Set();  // maybe this can be a map of questions: answers
        this.likes = new Set();  // set of user IDs who like THIS user - could also make this a Like object if we want to include a message
        this.matches = new Set();  // set of user IDs that matched with THIS user
    }

    addFriend(friend) {
        this.friends.add(friend);
    }

    addDobbie(dobbie) {
        dobbie.approveDobbie();
        this.dobbies.add(dobbie);
    }

    match(other) {
        this.matches.add(other);
    }

    removeLike(other) {
        if (this.likes.has(other)) {
            this.likes.delete(other);
            return true;
        }
    }

    acceptLike(other) {
        if (this.removeLike(other)) {
            this.matches.add(other);
        }
    }

    addLike(src) {
        this.likes.add(src);
    }
}