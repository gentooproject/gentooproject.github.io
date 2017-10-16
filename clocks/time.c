#include <lxpanel/plugin.h>
#include <stdio.h>
#include <time.h>
#define AOE (+19)

GtkWidget *test_constructor(LXPanel *panel, config_setting_t *settings)
{
(void)panel;
(void)settings;
time_t temps;
struct tm *info;
time(&temps);
info = gmtime(&temps);
char perro[10] = {'\0'};
snprintf(perro, sizeof(perro), "%2d:%02d\n", (info->tm_hour+AOE)%24, info->tm_min);
GtkWidget *pLabel = gtk_label_new(perro);
gtk_widget_show(pLabel);
GtkWidget *p = gtk_event_box_new();
gtk_widget_set_has_window(p, FALSE);
gtk_container_set_border_width(GTK_CONTAINER(p), 1);
gtk_container_add(GTK_CONTAINER(p), pLabel);
gtk_widget_set_size_request(p, 40, 25);
return p;
}


FM_DEFINE_MODULE(lxpanel_gtk, test)

/* Plugin descriptor. */

LXPanelPluginInit fm_module_init_lxpanel_gtk = {
   .name = "Private Clock2",
   .description = "Private Timezone",

   // assigning our functions to provided pointers.
   .new_instance = test_constructor
};





