const serverId = "kUT7mwM6JB";
const apiUrl = `https://discord.com/api/v9/invites/${serverId}?with_counts=true&with_expiration=true`;

fetch(apiUrl, { method: "GET", headers: { "Content-Type": "application/json" }})
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    // console.log(data);
    // set guild name
    document.getElementById('guild_name_dc').textContent = data.guild.name;
    // set total members and active members
    document.getElementById('total_member_dc').textContent = data.approximate_member_count;
    document.getElementById('active_member_dc').textContent = data.approximate_presence_count;
  });