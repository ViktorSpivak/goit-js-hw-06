"use strict";
import users from "./users.js";
// ==========================
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));
// ==========================
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue"));
// ==========================
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(users => users.name);
console.log(getUsersWithGender(users, "male"));
// ==========================
const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));
// ==========================
const getUserWithEmail = (users, email) =>
  users.filter(user => user.email === email).map(users => users.name);
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// ==========================
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
// ==========================
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
console.log(calculateTotalBalance(users));
// ==========================
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.some(friend => friend === friendName))
    .map(users => users.name);
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
// ==========================
const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(users => users.name);
console.log(getNamesSortedByFriendsCount(users));
// ==========================
const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .reduce((sortedSkills, skill) => {
      sortedSkills.some(element => skill === element) ||
        sortedSkills.push(skill);
      return sortedSkills;
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users));
