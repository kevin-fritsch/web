from odoo import _, fields, models


class ResUsers(models.Model):
    _inherit = "res.users"

    scale = fields.Selection(
        selection=[
            ("day", _("Day")),
            ("week", _("Week")),
            ("month", _("Month")),
            ("year", _("Year")),
        ]
    )
