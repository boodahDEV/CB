package principal;

import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.Color;
import javax.swing.border.MatteBorder;
import javax.swing.JButton;
import javax.swing.ImageIcon;
import javax.swing.SwingConstants;
import java.awt.Cursor;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.event.MouseMotionAdapter;

public class Gui_Main extends JFrame {
	private static final long serialVersionUID = 1L;
	private JPanel contentPane, title;
	public JButton exit, logo;
	public int x,y;
	/*****************************************************************/
	public static void main(String[] args) {
					Gui_Main frame = new Gui_Main();
					frame.setVisible(true);
	}
	/****************************************************************8*/
	public Gui_Main() {
		setUndecorated(true);
		setLocationRelativeTo(null);
		this.setLocationRelativeTo(null);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		setBounds(100,100,850, 510);
		contentPane = new JPanel();
		contentPane.setBackground(new Color(255, 255, 255));
		contentPane.setBorder(new MatteBorder(1, 1, 1, 1, (Color) new Color(40,220,209)));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		/*########################################################################################################################*/
		/*########################################################################################################################*/
		JPanel dashboard = new JPanel();																	//#PANEL DESLIZANTE
		dashboard.setBackground(new Color(19,179,201));
		dashboard.setBounds(1, 1, 190, 508);
		contentPane.add(dashboard);
		dashboard.setLayout(null);
		
			logo = new JButton(" ");
			logo.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
			logo.setHorizontalTextPosition(SwingConstants.CENTER);
			logo.setIconTextGap(-10);
			logo.setToolTipText("Inicio");
			logo.setIcon(new ImageIcon(Gui_Main.class.getResource("/recursos/logo_4.png")));
			logo.setRolloverSelectedIcon(new ImageIcon(Gui_Main.class.getResource("/recursos/logo_4.png")));
			logo.setFocusable(false);
			logo.setContentAreaFilled(false);
			logo.setBorderPainted(false);
			logo.setBounds(145, -2, 40, 43);
			dashboard.add(logo);
		/*########################################################################################################################*/
		title = new JPanel();																		//#PANEL DEL TITULO
		title.addMouseListener(new MouseAdapter() {
			public void mousePressed(MouseEvent a) {
				x = a.getX(); y = a.getY();
				System.out.println(x+" --- "+y);
			}
		});
		title.addMouseMotionListener(new MouseMotionAdapter() {
			public void mouseDragged(MouseEvent a) {
				int xx=a.getXOnScreen(), yy=a.getYOnScreen(); 
				setLocation(xx-x,yy-y);
			}
		});
		title.setBackground(new Color(255, 255, 255));
		title.setBounds(1, 1, 848, 25);
		contentPane.add(title);
		title.setLayout(null);
		
			exit = new JButton(" ");
			exit.setBorder(null);
			exit.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					System.exit(0);
				}
			});
			exit.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
			exit.setIcon(new ImageIcon(Gui_Main.class.getResource("/recursos/exit_1.png")));
			exit.setToolTipText("Exit");
			exit.setIconTextGap(-30);
			exit.setHorizontalTextPosition(SwingConstants.CENTER);
			exit.setFocusable(false);
			exit.setContentAreaFilled(false);
			exit.setBorderPainted(false);
			exit.setBounds(810, 2, 36, 22);
			title.add(exit);
		JPanel status = new JPanel();																		//PANEL DE ESTATU
		status.setBackground(new Color(255, 255, 255));
		status.setBounds(190, 484, 659, 25);
		contentPane.add(status);
		status.setLayout(null);
		/*########################################################################################################################*/
	}
}
