
const discord = require('discord.js');
const request = require('request');
const fetch = require('isomorphic-fetch')
const express = require('express');
const http = require("http");
const auth = require("../data/auth.json");
const members = require("../data/members.json");
const other = require("../data/other.json");
const app = express();

/**
 * Outputs the list of commands for the bot
 * @param {Message} message 
 */
const help = function (message) {
  message.channel.send({
    embed: {
      color: 3447003,
      title: "Command List",
      description: "Below are the list of commands for the bot.",
      fields: [
        {
          name: "***Remove User***",
          value: "!kick @Member"
        }, 
        {
          name: "***Change User Nickname***",
          value: "!name @Member newName"
        }, 
        {
          name: "***Find Anime***",
          value: "!anime animeTitle"
        },
        {
          name: "***Google Search***",
          value: "!google searchRequest"
        },
        {
          name: "***RT***",
          value: "!rt @Member \n*Note: This command has known issues and may not work all the time.*"
        }
      ],
    }
  })
}

module.exports = help;