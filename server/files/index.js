window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        const div = document.createElement("article");
        div.id = movie.imdbID;

        const title = document.createElement("h2");
        title.textContent = movie.Title;

        const img = document.createElement("img");
        img.src = movie.Poster;

        const plot = document.createElement("p");
        plot.textContent = movie.Plot;

        const button = document.createElement("button");
        button.textContent = "Edit";
        button.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        const meta = document.createElement("p");
        meta.textContent = `Erschienen: ${movie.Released}`;

        const runtime = document.createElement("p");
        runtime.textContent = `Laufzeit: ${movie.Runtime} min`;

        const genres = document.createElement("p");
        genres.textContent = "Genres: " + movie.Genres.join(", ");

        const people = document.createElement("p");
        people.textContent = `Regie: ${movie.Directors.join(", ")}`;

        const writers = document.createElement("p");
        writers.textContent = `Drehbuch: ${movie.Writers.join(", ")}`;

        const actors = document.createElement("p");
        actors.textContent = `Schauspieler: ${movie.Actors.join(", ")}`;

        const metascore = document.createElement("p");
        metascore.textContent = `Metascore: ${movie.Metascore}`;

        const imdbRating = document.createElement("p");
        imdbRating.textContent = `IMDB Rating: ${movie.imdbRating}`;

        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(plot);
        div.appendChild(button);
        div.appendChild(meta);
        div.appendChild(runtime);
        div.appendChild(genres);
        div.appendChild(people);
        div.appendChild(writers);
        div.appendChild(actors);
        div.appendChild(metascore);
        div.appendChild(imdbRating);
        bodyElement.appendChild(div);
      }
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        const div = document.createElement("article");
        div.id = movie.imdbID;

        const title = document.createElement("h2");
        title.textContent = movie.Title;

        const img = document.createElement("img");
        img.src = movie.Poster;

        const plot = document.createElement("p");
        plot.textContent = movie.Plot;

        const button = document.createElement("button");
        button.textContent = "Edit";
        button.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        const meta = document.createElement("p");
        meta.textContent = `Erschienen: ${movie.Released}`;

        const runtime = document.createElement("p");
        runtime.textContent = `Laufzeit: ${movie.Runtime} min`;

        const genres = document.createElement("p");
        genres.textContent = "Genres: " + movie.Genres.join(", ");

        const people = document.createElement("p");
        people.textContent = `Regie: ${movie.Directors.join(", ")}`;

        const writers = document.createElement("p");
        writers.textContent = `Drehbuch: ${movie.Writers.join(", ")}`;

        const actors = document.createElement("p");
        actors.textContent = `Schauspieler: ${movie.Actors.join(", ")}`;

        const metascore = document.createElement("p");
        metascore.textContent = `Metascore: ${movie.Metascore}`;

        const imdbRating = document.createElement("p");
        imdbRating.textContent = `IMDB Rating: ${movie.imdbRating}`;

        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(plot);
        div.appendChild(button);
        div.appendChild(meta);
        div.appendChild(runtime);
        div.appendChild(genres);
        div.appendChild(people);
        div.appendChild(writers);
        div.appendChild(actors);
        div.appendChild(metascore);
        div.appendChild(imdbRating);
        bodyElement.appendChild(div);
      }
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};