async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const post_id = document.location.toString().split("/")[
    document.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    const response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        comment_text,
        post_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response);
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
