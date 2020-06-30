package actions

import (
	"net/http"

	"github.com/gobuffalo/buffalo"
)

// HelloHandler is a hello world endpoint
func HelloHandler(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.String("Hello Full Cycle"))
}
